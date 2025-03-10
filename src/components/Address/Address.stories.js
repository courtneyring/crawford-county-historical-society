import Address from "./Address";

export default {
    title: 'Components/Address',
    components: Address,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

const address = {
    street: 'Street',
    street2: 'street2',
    city: 'New York',
    state: 'NY',
    zip: 10012
}

export const Primary = {
    render: () => {
        return (
            <Address address={address} />
        )
    }
};
