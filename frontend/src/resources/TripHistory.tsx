//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const TripHistoryTitle = () => {
  const record = useRecordContext();
  return <span>TripHistory {record ? `"${record.tripId}"` : ''}</span>;
};

export const TripHistoryList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="tripId" reference="rides" />
      <ReferenceField source="userId" reference="users" />
      <DateField source="tripDate" />
      <TextField source="destination" />
      <TextField source="status" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const TripHistoryEdit = () => (
  <Edit title={<TripHistoryTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="tripId" reference="rides" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="userId" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="tripDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="destination" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="status" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const TripHistoryCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="tripId" reference="rides" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="userId" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="tripDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="destination" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="status" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="tripId" label="tripId" reference="rides" alwaysOn />,
  <ReferenceInput source="userId" label="userId" reference="users" alwaysOn />,
  ,
  ,
  ,
];