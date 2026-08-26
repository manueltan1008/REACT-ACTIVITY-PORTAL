import { useState } from 'react'
import './Activities.css'

function getRemarks(score) {
  if (score < 0 || score > 100) return 'Invalid score'
  if (score >= 90) return 'Excellent'
  if (score >= 85) return 'Very Good'
  if (score >= 80) return 'Good'
  if (score >= 75) return 'Passed'
  return 'Failed'
}

function Activity2() {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleEvaluate = () => {
    if (name.trim() === '' || score.trim() === '') {
      setError('Please enter student name and score.')
      setResult(null)
      return
    }

    const numericScore = Number(score)

    if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
      setError('Invalid score. Please enter a score from 0 to 100.')
      setResult(null)
      return
    }

    setError('')

    setResult({
      name: name.trim(),
      score: numericScore,
      remarks: getRemarks(numericScore),
    })
  }

  const handleClear = () => {
    setName('')
    setScore('')
    setResult(null)
    setError('')
  }

  return (
    <div className="activity-page">
      <div className="activity-card">
        <span className="activity-eyebrow">ACTIVITY 2</span>

        <h1 className="activity-title">
          Student Grade Evaluation
        </h1>

        {/* <p className="activity-subtitle">
          Evaluate a score into Excellent → Failed
        </p> */}

        <div className="field-group">
          <label className="field-label">Student Name</label>
          <input
            className="field-input"
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => {
                if (/^[A-Za-z ]*$/.test(e.target.value)) {
                    setName(e.target.value)
                }
            }}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Score</label>
          <input
            className="field-input"
            type="number"
            placeholder="Enter score (0-100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        {error && (
          <div className="message-box">
            {error}
          </div>
        )}

        <button
          className="btn-block primary"
          onClick={handleEvaluate}
        >
          Evaluate
        </button>

        <button
          className="btn-block secondary"
          onClick={handleClear}
        >
          Clear
        </button>

        {result && (
          <div className={`result-box ${result.remarks === 'Failed' 
            ? 'result-box-failed' : result.remarks === 'Excellent'
            ? 'result-box-excellent'
            : ''
            }`}
            >
            <p className="result-label">Student Name</p>
            <p className="result-value">{result.name}</p>

            <p className="result-label">Score</p>
            <p className="result-value">{result.score}</p>

            <p className="result-label">Remarks</p>
            <p className="result-remark">{result.remarks}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Activity2