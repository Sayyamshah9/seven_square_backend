class Property {
    constructor(title, price, description, address, propertyActionType, livingArea, furnished, bedrooms, ytLink)
    {
        this.title = title;
        this.price = price;
        this.description = description;
        this.address = address;
        this.propertyActionType = propertyActionType;
        this.livingArea = livingArea;
        this.furnished = furnished;
        this.bedrooms = bedrooms;
        this.ytLink = ytLink;
    }
}

module.exports = Property