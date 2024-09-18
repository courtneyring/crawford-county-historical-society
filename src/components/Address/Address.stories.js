import Address from "./Address";

export default {
    title: 'Components/Address',
    components: Address, 
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}


export const Primary = {
    args: {
        address: {
            street: 'Street',
            stree2: 'street2',
            city: 'New York',
            state: 'NY',
            zip: 10012
        }
    },
};
