import React, {Fragment} from "react";
import {StarFilled} from "@ant-design/icons"
import {v4 as uuid} from "uuid"

import {ICustomer, IOperator} from "../../../globalTypes";
import {msToHMS} from "../../../utils/date";

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
