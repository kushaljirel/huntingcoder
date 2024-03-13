"use server";

export async function postContactInfo(formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    desc: formData.get("desc"),
  };
  // POST request using fetch()
  await fetch("http://localhost:3000/api/getcontact", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify(rawFormData),
    // Adding headers to the request
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Converting to JSON
  const response = {success: true};
  return response;
}
