namespace sap.cap.productshop;

entity Product
{
    key ID : Integer;
    Name : String(100);
    Stock : Integer;
    Price : Integer;
}

entity Supplier
{
    key ID : String(100);
    Name : String(100);
    City : String(100);
    PhoneNo : String(100);
}
