import React from "react";
import {v4 as uuid} from "uuid";
import {StarFilled} from "@ant-design/icons";

import {msToHMS} from "../../../utils/date";
import {ICustomer, IOperator} from "../../../globalTypes";

export const columns = [
    {
        title: 'Customer',
        dataIndex: 'customer',
        render: (item: ICustomer) => item.customer,
    },
    {
        title: 'Phone',
        dataIndex: 'customer',
        key: 'phone',
        render: (item: ICustomer) => item.phone,
    },
    {
        title: 'Operator',
        dataIndex: 'operator',
        key: 'phone',
        render: (item: IOperator) => item.operator,
    },
    {
        title: 'Rate',
        dataIndex: 'rate',
        key: 'rate',
        render: (rate: number) => new Array(rate).fill('').map(() => <StarFilled key={uuid()}/>),
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
        render: (duration: number) => msToHMS(duration),
    },
];
