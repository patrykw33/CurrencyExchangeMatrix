import React from "react";

const CurrenciesCheckboxes = ({ currencies, selected, onChange }) => {
    return (
        <div >
            { currencies.map(currency => {
                return (
                    <span key={ currency + "_checkbox"}>
                        <input
                            type="checkbox"
                            checked={ selected.indexOf(currency) !== -1 }
                            onChange={ event => {
                                if (selected.indexOf(currency) === -1) {
                                    onChange([ ...selected, currency ]);
                                } else {
                                    onChange(selected.filter(selectedCurrency => selectedCurrency !== currency))
                                }
                            } }
                        />
                            <label> { currency } </label>
                    </span>
                );
            })}
        </div>


    );
};

export default CurrenciesCheckboxes;