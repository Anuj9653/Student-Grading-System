document.addEventListener("DOMContentLoaded", () => {
  const StudentCount = document.getElementById("StudentCount");
  const SubjectCount = document.getElementById("SubjectCount");
  const PassedCount = document.getElementById("PassedCount");
  const FailedCount = document.getElementById("FailedCount");

  // Function to fetch and display student, subject, and performance counts
  const fetchCount = async () => {
      try {
          const response = await fetch("/count");

          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
              console.log("Fetched Data:", data);
              StudentCount.textContent = data[0]?.StudentCount ?? "0";
              SubjectCount.textContent = data[0]?.SubjectCount ?? "0";
              PassedCount.textContent = data[0]?.PassedCount ?? "0";
              FailedCount.textContent = data[0]?.FailedCount ?? "0";
          } else {
              console.warn("No data received from API.");
              StudentCount.textContent = "0";
              SubjectCount.textContent = "0";
              PassedCount.textContent = "0";
              FailedCount.textContent = "0";
          }
      } catch (error) {
          console.error("Error fetching counts:", error);
          StudentCount.textContent = "Error";
          SubjectCount.textContent = "Error";
          PassedCount.textContent = "Error";
          FailedCount.textContent = "Error";
      }
  };

  fetchCount();
});
