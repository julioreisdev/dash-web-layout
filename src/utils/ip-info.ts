import { simpleLimitString } from "./strings";

const ipInfo = async (
  setLocation: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!localStorage.getItem("location")) {
    const response = await fetch(
      "https://ipinfo.io/143.255.55.150?token=47bf1cf931ef5c"
    );
    const data = await response.json();
    localStorage.setItem("location", `${data?.city}, ${data?.region}`);
    localStorage.setItem("location-loc", `${data?.loc}`);
  }
  setLocation(simpleLimitString(localStorage.getItem("location") || "", 40));
};

export default ipInfo;
