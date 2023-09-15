import Header from "../components/help-center/Header";
export default function layout({ children }) {
  return (
    <div className="flex flex-col px-24 gap-8 min-h-[95vh]">
      <Header />
      {children}
    </div>
  );
}
