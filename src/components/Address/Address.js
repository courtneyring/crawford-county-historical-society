const Address = ({ address }) => {
    return (
        <p className="text-center md:text-left">
            {address.street}
            <br />
            {address.street2}
            <br />
            {address.city}, {address.state} {address.zip}
        </p>
    )
}

export default Address;