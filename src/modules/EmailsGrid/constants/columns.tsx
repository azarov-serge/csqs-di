import React from "react";
import {v4 as uuid} from "uuid";
import {StarFilled} from "@ant-design/icons";

import {ICustomer, IOperator} from "../../../globalTypes";

export const columns = [
    {
        title: 'Customer',
        dataIndex: 'customer',
        render: (item: ICustomer) => item.customer,
    },
    {
        title: 'E-mail',
        dataIndex: 'customer',
        key: 'email',
        render: (item: ICustomer) => item.email,
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
];
