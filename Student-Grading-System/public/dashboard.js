document.addEventListener("DOMContentLoaded", () => {
  const studentCountElement = document.getElementById("StudentCount");
  const subjectCountElement = document.getElementById("SubjectCount");
  const passedStudentsElement = document.getElementById("PassedStudents");
  const failedStudentsElement = document.getElementById("FailedStudents");

  if (!studentCountElement || !subjectCountElement || !passedStudentsElement || !failedStudentsElement) {
      console.error("One or more elements not found.");
      return;
  }

  const fetchCount = async () => {
      try {
          const response = await fetch("/count");

          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log("Fetched Data:", data);

          // Assuming `data` is an object, access properties directly
          studentCountElement.textContent = data.StudentCount ?? "N/A";
          subjectCountElement.textContent = data.SubjectCount ?? "N/A";
          passedStudentsElement.textContent = data.PassedStudents ?? "N/A";
          failedStudentsElement.textContent = data.FailedStudents ?? "N/A";
          
      } catch (error) {
          console.error("Error:", error);
          studentCountElement.textContent = "Error loading count";
          subjectCountElement.textContent = "Error loading count";
          passedStudentsElement.textContent = "Error loading count";
          failedStudentsElement.textContent = "Error loading count";
      }
  };

  fetchCount();
});
