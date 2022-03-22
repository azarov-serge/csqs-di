import {EDataStatus} from "../../constants/loadData";

export interface DataLoaderProps {
    status: EDataStatus;
    error?: string;
}
