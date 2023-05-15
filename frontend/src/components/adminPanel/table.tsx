import { DataGrid, GridColDef, renderActionsCell } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { User } from '../../contracts/user';
import { MenuItem } from '@mui/material';
import KebabMenu from '../kebabMenu';
import AdminService from '../../services/admin-service';

const handleDeleteUser = (guid: string) => {
    let adminService = new AdminService();
    adminService.deleteUser(guid)
}

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Имя', width: 300 },
    { field: 'login', headerName: 'Логин', width: 200 },
    { field: 'email', headerName: 'Email', width: 350 },
    {
        field: 'guid', headerName: 'Действия',
        renderCell: (params) => {
            return <KebabMenu>
                <MenuItem onClick={() => {handleDeleteUser(params.value)}}>Удалить</MenuItem>
                <MenuItem>Редактировать</MenuItem>
            </KebabMenu>
        },
    },
];


export default function AdminTable(props: { rows: User[] }) {
    const [rows, setRows] = useState<User[]>([])


    useEffect(() => {
        setRows(props.rows)
    }, [props.rows])


    return <>
        <div style={{ height: 400, width: '100%', background: "#fff" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.guid}
                // pageSize={5}
                autoPageSize
                checkboxSelection
            />
        </div>
    </>
}