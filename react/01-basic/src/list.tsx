import React from "react";
import { Link, generatePath } from "react-router-dom";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableFooter from "@material-ui/core/TableFooter";
import { makeStyles } from '@material-ui/core/styles';
import { TablePaginationActions } from "./pagination";


const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState("lemoncode");
  const [retrieveData, setRetrieveData] = React.useState("lemoncode");

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOrganization = () => {
    console.log("Look for new organization members...");
    setRetrieveData(organization);
  };

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [retrieveData]);

  return (
    <>
      <h2>Look for organization members:</h2>
      <Input
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handleOrganization}
      >
        Search
      </Button>
      <TableContainer className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : members
          ).map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <img src={member.avatar_url} style={{ width: "5rem" }} />
                </TableCell>
                <TableCell>{member.id}</TableCell>
                <TableCell>
                  <Link to={generatePath("/detail/:id", { id: member.login })}>
                    {member.login}
                  </Link>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={members.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
