import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Link, useParams } from "react-router-dom";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BusinessIcon from '@material-ui/icons/Business';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DnsIcon from '@material-ui/icons/Dns';

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
     <h2>Hello from Detail page</h2>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText>id: {member.id}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText>login: {member.login}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText>name: {member.name}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText>company: {member.company}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FingerprintIcon />
        </ListItemIcon>
        <ListItemText>bio: {member.bio}</ListItemText>
      </ListItem>
    </List>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
