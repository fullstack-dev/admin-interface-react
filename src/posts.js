import React from 'react';
// import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                {/* <TextField source="id" /> */}
                <TextField source="name" />
            </ReferenceField>
            {/* <TextField source="id" /> */}
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);
