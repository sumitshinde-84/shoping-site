import "./style/shoeSize.css";

const ShoeSize = () => {
    const sizes = [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8.5];

    const selectSize = (e) => {
        const sizeCards = document.querySelectorAll('.sizeCard');
        sizeCards.forEach((card) => {
            card.style.border = "1px solid rgba(0, 0, 0, 0.291)";
        });
        e.currentTarget.style.border = "1px solid black";
    };

    return (
        <div className="shoeSize-main">
            {sizes.map((size) => (
                <div onClick={selectSize} className="sizeCard" key={size}>
                    <p>{size}</p>
                </div>
            ))}
        </div>
    );
};

export default ShoeSize;
