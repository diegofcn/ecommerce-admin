import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
      <p className="p-4"><UserButton afterSignOutUrl="/"/></p>
    )
  }
  
  export default SetupPage;