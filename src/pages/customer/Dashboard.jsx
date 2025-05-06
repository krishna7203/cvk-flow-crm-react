
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomerLayout from "@/layouts/CustomerLayout";
import { FileText, MessageSquare, HelpCircle, InfoIcon } from "lucide-react";

const CustomerDashboard = () => {
  const { currentUser } = useAuth();

  const recentInvoices = [
    { id: "INV-001", date: "May 4, 2025", amount: "$256.00", status: "Paid" },
    { id: "INV-002", date: "Apr 29, 2025", amount: "$1,024.00", status: "Pending" },
    { id: "INV-003", date: "Apr 15, 2025", amount: "$512.00", status: "Paid" },
  ];

  return (
    <CustomerLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Customer Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome back, {currentUser?.name}</h2>
          <p className="text-muted-foreground">
            Here's a summary of your account and recent activity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Account Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Active</div>
              <p className="text-xs text-green-600">Premium Plan</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">May 15, 2025</div>
              <p className="text-xs text-muted-foreground">$89.00 monthly</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1 Open</div>
              <p className="text-xs text-muted-foreground">2 closed this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">64%</div>
              <p className="text-xs text-muted-foreground">Of your storage limit</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Account Overview</CardTitle>
                <CardDescription>
                  Your current plan details and usage statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Your Plan Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <InfoIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>25 User Accounts</span>
                        </li>
                        <li className="flex items-center">
                          <InfoIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>100GB Storage</span>
                        </li>
                        <li className="flex items-center">
                          <InfoIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>Priority Support</span>
                        </li>
                        <li className="flex items-center">
                          <InfoIcon className="mr-2 h-4 w-4 text-primary" />
                          <span>API Access</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="py-1 border-b">Added new team member - May 3, 2025</li>
                        <li className="py-1 border-b">Updated account settings - Apr 28, 2025</li>
                        <li className="py-1 border-b">Payment processed - Apr 15, 2025</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="rounded-full btn-gradient">Upgrade Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="invoices">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Recent Invoices
                </CardTitle>
                <CardDescription>
                  View and download your recent invoices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Invoice</th>
                        <th className="text-left py-3 px-2">Date</th>
                        <th className="text-left py-3 px-2">Amount</th>
                        <th className="text-left py-3 px-2">Status</th>
                        <th className="text-right py-3 px-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentInvoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b">
                          <td className="py-3 px-2">{invoice.id}</td>
                          <td className="py-3 px-2">{invoice.date}</td>
                          <td className="py-3 px-2">{invoice.amount}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <Button variant="outline" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Invoices</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Support Center
                </CardTitle>
                <CardDescription>
                  Get help with your account and service questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Contact Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Our support team is available Monday-Friday, 9am-5pm PST.
                      </p>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Open Support Ticket
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-primary hover:underline flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            Getting Started Guide
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-primary hover:underline flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            API Documentation
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-primary hover:underline flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Community Forum
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </CustomerLayout>
  );
};

export default CustomerDashboard;
