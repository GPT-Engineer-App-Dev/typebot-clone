import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Features() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-lg mb-6">Explore the amazing features of Typebot Clone.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Details about feature 1.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Details about feature 2.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Details about feature 3.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Features;