import { useState } from 'react'
import './Activities.css'

function getRate(kwh) {
    if (kwh <= 100) return 10
    if (kwh <= 200) return 12
    if (kwh <= 300) return 15
    return 18
}

function Activity4() {
    const [customerName, setCustomerName] = useState('')
    const [consumption, setConsumption] = useState('')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const handleCalculate = () => {
        if (customerName.trim() === '' || consumption.trim() === '') {
            setError('Please enter customer name and consumption.')
            setResult(null)
            return
        }

        const kwh = Number(consumption)

        if (Number.isNaN(kwh) || kwh < 0) {
            setError('Invalid consumption. Please enter a valid number of kWh.')
            setResult(null)
            return
        }

        setError('')

        const rate = getRate(kwh)
        const totalBill = kwh * rate
        const usageStatus =
            totalBill >= 5000 ? 'High Electricity Usage' : 'Normal Electricity Usage'

        setResult({
            customerName: customerName.trim(),
            consumption: kwh,
            rate,
            totalBill,
            usageStatus,
        })
    }

    const handleClear = () => {
        setCustomerName('')
        setConsumption('')
        setResult(null)
        setError('')
    }

    const formatCurrency = (amount) =>
        `₱${amount.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`

    return (
        <div className="activity-page">
            <div className="activity-card">
                <span className="activity-eyebrow">ACTIVITY 4</span>
                <h1 className="activity-title">Electricity Bill Calculator</h1>
                <p className="activity-subtitle">
                    Compute a bill from kWh consumption across tiered rates.
                </p>
                <hr className="activity-divider" />

                <div className="field-group">
                    <label className="field-label">Customer Name</label>
                    <input
                        className="field-input"
                        type="text"
                        placeholder="Enter customer name"
                        value={customerName}
                        onChange={(e) => {
                            if (/^[A-Za-z ]*$/.test(e.target.value)) {
                                setCustomerName(e.target.value)
                            }
                        }}
                    />
                </div>

                <div className="field-group">
                    <label className="field-label">Consumption (kWh)</label>
                    <input
                        className="field-input"
                        type="number"
                        placeholder="Enter consumption in kWh"
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                    />
                </div>

                {error && <div className="message-box">{error}</div>}

                <button className="btn-block primary" onClick={handleCalculate}>
                    Calculate Bill
                </button>
                <button className="btn-block secondary" onClick={handleClear}>
                    Clear
                </button>

                {result && (
                    <div
                        className={`result-box ${result.usageStatus === 'High Electricity Usage'
                                ? 'result-box-failed'
                                : 'result-box-excellent'
                            }`}
                    >
                        <p className="result-label">Customer Name</p>
                        <p className="result-value">{result.customerName}</p>

                        <p className="result-label">Consumption</p>
                        <p className="result-value">{result.consumption} kWh</p>

                        <p className="result-label">Rate Applied</p>
                        <p className="result-value">₱{result.rate} per kWh</p>

                        <p className="result-label">Total Bill</p>
                        <p className="result-value">{formatCurrency(result.totalBill)}</p>

                        <p className="result-label">Usage Status</p>
                        <p className="result-remark">{result.usageStatus}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Activity4
