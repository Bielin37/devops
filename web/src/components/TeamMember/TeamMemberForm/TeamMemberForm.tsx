import type { EditTeamMemberById, UpdateTeamMemberInput } from 'types/graphql';

import type { RWGqlError } from '@redwoodjs/forms';
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms';

type FormTeamMember = NonNullable<EditTeamMemberById['teamMember']>;

interface TeamMemberFormProps {
  teamMember?: EditTeamMemberById['teamMember'];
  onSave: (data: UpdateTeamMemberInput, id?: FormTeamMember['id']) => void;
  error: RWGqlError;
  loading: boolean;
}

const TeamMemberForm = (props: TeamMemberFormProps) => {
  const onSubmit = (data: FormTeamMember) => {
    props.onSave(data, props?.teamMember?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form<FormTeamMember> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.teamMember?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.teamMember?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="avatar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Avatar
        </Label>

        <TextField
          name="avatar"
          defaultValue={props.teamMember?.avatar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="avatar" className="rw-field-error" />

        <Label
          name="team"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Team
        </Label>

        <TextField
          name="team"
          defaultValue={props.teamMember?.team}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="team" className="rw-field-error" />

        <Label
          name="project"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project
        </Label>

        <TextField
          name="project"
          defaultValue={props.teamMember?.project}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="project" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default TeamMemberForm;
