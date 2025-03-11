document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("batch_connect_session_context_show_advanced");
    const advanced_fields = [
      "partition",
      "qos",
      "gpu"
    ];
  
    function toggleAdvancedFields() {
      advanced_fields.forEach(field => {
        const fieldDiv = document.getElementById(`batch_connect_session_context_${field}`).closest(".form-group");
        if (checkbox.checked) {
          fieldDiv.style.display = "";
        } else {
          fieldDiv.style.display = "none";
        }
      });
    }
  
    // Initialize visibility
    toggleAdvancedFields();
  
    // Toggle visibility on checkbox change
    checkbox.addEventListener("change", toggleAdvancedFields);
  });
  