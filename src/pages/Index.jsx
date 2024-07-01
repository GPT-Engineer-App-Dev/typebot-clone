import { Button } from "@/components/ui/button";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Typebot Clone</h1>
        <p className="text-lg mb-6">Create interactive chatbots with ease.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </div>
    </main>
  );
}

export default Index;