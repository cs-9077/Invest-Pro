import React, { useState } from "react";

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    { id: 1, name: "1-Stage Evaluation", details: "Max Drawdown: 6%, Daily Loss: 5%" },
    { id: 2, name: "2-Stage Evaluation", details: "Max Drawdown: 8%, Daily Loss: 5%" },
    { id: 3, name: "3-Stage Evaluation", details: "Max Drawdown: 10%, Daily Loss: 6%" },
  ];

  const handleRowClick = (program) => {
    setSelectedProgram(program);
  };

  return (
    <section id="programs" className="programs-section">
      <h2>Nos Programmes</h2>
      <table className="programs-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr
              key={program.id}
              onClick={() => handleRowClick(program)}
              className={selectedProgram && selectedProgram.id === program.id ? "active" : ""}
            >
              <td>{program.name}</td>
              <td>{program.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProgram && (
        <div className="program-details">
          <h3>Détails du {selectedProgram.name}</h3>
          <p>{selectedProgram.details}</p>
        </div>
      )}
    </section>
  );
};

export default ProgramsSection;
