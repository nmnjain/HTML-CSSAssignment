import TextUpdater from "./TextUpdater";
import FormLogger from "./FormLogger";
import UserCard from "./UserCard";
import CustomButton from "./CustomButton";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">React.js Assignment</h1>
      <TextUpdater />
      <FormLogger />
      <UserCard name="John Doe" email="john.doe@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
};

export default App;
