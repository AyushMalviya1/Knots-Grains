class AuthService {
  signup = async (carpenter) => {
    try {
      const response = await fetch("http://localhost:2003/addCarpenter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carpenter),
      });

      const data = await response.json();
      if (!response.ok) {
        // Backend exception
        throw new Error(data.success || "Signup failed");
      } 
      console.log("Success:", data);
      return data; // return data for the caller
    } catch (error) {
      console.error("Error:", error);
      throw error; // throw so caller can catch
    }
  };

  login = async (carpenter) => {
  try {
    const response = await fetch("http://localhost:2003/checkCarpenter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carpenter),
    });

    const data = await response.json();

    if (!response.ok) {
      // Backend exception
      throw new Error(data.error || "Login failed");
    }

    // Success case
    return data; // { message: "successful", carpenter: {...} }

  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
};

checkEmail = async (email) => {
  try {
    const response = await fetch(
      `http://localhost:2003/checkEmail?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) {
      console.error("Error checking email:", response.statusText);
      throw new Error("Network response was not ok");
    }
    
    const isAvailable = await response.json();

    return isAvailable; 

  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
};

verifyAadhaar = async (aadhaar) => {

  try{
    const response = await fetch(
      `http://localhost:2003/checkAadhar?aadharNumber=${encodeURIComponent(aadhaar)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    
    const isAuthorized = await response.json();
    return isAuthorized;

  }catch(error){
    console.error("Error verifying Aadhaar:", error);
    throw error;
  }
}

  
}

const authService = new AuthService();
export default authService;
