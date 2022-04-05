import React from "react";
import {v4 as uuid} from "uuid";
import {StarFilled} from "@ant-design/icons";

import {msToHMS} from "../../../../../utils/date";
import {EEventType, ICustomer, IOperator} from "../../../../../globalTypes";

export const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
    },
    {
        title: 'Customer',
        dataIndex: 'customer',
        render: (item: ICustomer) => item.customer,
    },
    {
        title: 'Phone / E-mail',
        dataIndex: 'customer',
        key: 'phone',
        render: (item: ICustomer) => {
            if (EEventType.EMAILS) {
                return item.email;
            }

            return item.phone;
        },
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
        render: (duration: number) => {
            if (duration) {
                return msToHMS(duration);
            }

            return "--";
        },
    },
];
