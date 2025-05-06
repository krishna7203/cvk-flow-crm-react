
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/layouts/AdminLayout";
import { BarChart, Users, DollarSign, Activity } from "lucide-react";

const AdminDashboard = () => {
  const { currentUser } = useAuth();

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      description: "12% increase from last month",
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Active Users",
      value: "2,350",
      description: "5% increase from last week",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      description: "1.1% increase from yesterday",
      icon: <Activity className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Active Employees",
      value: "24",
      description: "3 new this month",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome, {currentUser?.name}</h2>
          <p className="text-muted-foreground">
            This is your admin dashboard where you can manage your entire CRM system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>
                  View your key metrics and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center text-muted-foreground border rounded-md">
                  <div className="flex flex-col items-center">
                    <BarChart className="h-10 w-10 mb-2" />
                    <p>Chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>
                  Explore in-depth analytics and trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  Detailed analytics content would appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>System Reports</CardTitle>
                <CardDescription>
                  Generate and view system reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  Reports content would appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage users, roles, and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">
                  User management content would appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
