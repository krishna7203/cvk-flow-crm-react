
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import EmployeeLayout from "@/layouts/EmployeeLayout";
import { CheckCircle, Clock, User, Calendar } from "lucide-react";

const EmployeeDashboard = () => {
  const { currentUser } = useAuth();

  // Mock data for employee tasks
  const tasks = [
    { id: 1, title: "Follow up with client ABC", priority: "High", dueDate: "Today" },
    { id: 2, title: "Update customer profile", priority: "Medium", dueDate: "Tomorrow" },
    { id: 3, title: "Schedule meeting with team", priority: "Medium", dueDate: "May 10, 2025" },
    { id: 4, title: "Complete weekly report", priority: "High", dueDate: "May 8, 2025" },
  ];

  // Mock data for upcoming meetings
  const meetings = [
    { id: 1, title: "Client onboarding call", time: "2:00 PM", client: "XYZ Corp" },
    { id: 2, title: "Product demo", time: "4:30 PM", client: "ABC Inc" },
  ];

  return (
    <EmployeeLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome, {currentUser?.name}</h2>
          <p className="text-muted-foreground">
            Here's what you need to focus on today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">Today's Tasks</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <CardDescription>Your pending tasks and follow-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <li key={task.id} className="flex items-start gap-2 p-2 rounded hover:bg-gray-50">
                    <div className="mt-0.5">
                      <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{task.title}</p>
                      <div className="flex items-center text-sm text-muted-foreground gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          task.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {task.priority}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Due: {task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Complete</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Today's Schedule</CardTitle>
                <CardDescription>Upcoming meetings and calls</CardDescription>
              </CardHeader>
              <CardContent>
                {meetings.length > 0 ? (
                  <ul className="space-y-3">
                    {meetings.map((meeting) => (
                      <li key={meeting.id} className="flex gap-3 p-2 rounded hover:bg-gray-50">
                        <div className="mt-0.5">
                          <Calendar className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{meeting.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{meeting.time}</span>
                            <span>•</span>
                            <User className="h-3 w-3" />
                            <span>{meeting.client}</span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-center py-4 text-muted-foreground">No meetings scheduled for today</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-medium">Your Performance</CardTitle>
                <CardDescription>Monthly goals and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Customer follow-ups</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Deal closure rate</span>
                      <span className="font-medium">62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </EmployeeLayout>
  );
};

export default EmployeeDashboard;
