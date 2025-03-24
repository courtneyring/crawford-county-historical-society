import DataGrid from './DataGrid';

const items = [
    {label: 'president', value: 'Gail Thomas'},
    {label: 'vice president', value: 'Sally Smith'},
    {label: 'treasurer', value: 'John Doe'},
    {label: 'secretary', value: 'Jane Doe'},
    {label: 'Board Member', value: 'Jane Doe'},
    {label: 'Board Member', value: 'Jane Doe'},
    {label: 'Board Member', value: 'Jane Doe'},
]


export default {
    title: 'Components/DataGrid',
    component: DataGrid,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export const Primary = {
    render: () => {
        return (
            <DataGrid data={items} />
        )
    }

}
