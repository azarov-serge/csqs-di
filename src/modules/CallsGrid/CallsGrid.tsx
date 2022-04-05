import "reflect-metadata";
import React, { Component } from "react";
import { resolve } from "inversify-react";
import { Table } from "antd";

import DataLoader from "../../components/DataLoader/DataLoader";

import { columns } from "./constants/columns";
import { EDataStatus } from "../../constants/loadData";
import { CallsService } from "../../services/CallsService";
import { ICall } from "../../globalTypes";

interface CallsGridProp { }
interface CallsGridState {
    status: EDataStatus;
    calls: ICall[]
    error: string
}
class CallsGrid extends Component<CallsGridProp, CallsGridState> {
    @resolve(CallsService)
    private callsService!: CallsService;
    
    constructor(props: CallsGridProp) {
        super(props);

        this.state = {
            status: EDataStatus.INITIALED,
            calls: [],
            error: "",
        }
    }

    componentDidMount = async (): Promise<void> => {
        try {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    status: EDataStatus.LOADING,
                }
            });

            const calls = await this.callsService.getCalls();

            this.setState((prevState) => {
                return {
                    ...prevState,
                    status: EDataStatus.SUCCESSED,
                    calls: calls.map((call: ICall) => ({key: call.id, ...call})),
                }
            });
        } catch (error) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    status: EDataStatus.FAILED,
                    error: String(error),
                }
            });
        }
    }

    render = () => {
        const { status, error, calls} = this.state;

        return (
            <DataLoader isFetching={status === EDataStatus.LOADING} isFetched={status === EDataStatus.SUCCESSED} error={error}>
                <Table columns={columns} dataSource={calls} />
            </DataLoader>
        )
    }
};

export default CallsGrid;