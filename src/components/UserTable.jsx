import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const UserTable = ({user}) => {
    
  return (
    <div>
      <Table>
        {/* <TableCaption>User details</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="md:w-[200px] w-[150px]">User</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>{user.firstName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Middle Name</TableCell>
            <TableCell>{user.maidenName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>{user.lastName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>address</TableCell>
            <TableCell>{user.address.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell>{user.address.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell>{user.address.state}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>{user.company.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Company address</TableCell>
            <TableCell>{user.company.address.address}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
