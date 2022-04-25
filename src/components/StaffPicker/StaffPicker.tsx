import { getUsers } from '../../api';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

type StaffPickerProps = {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isInvalid?: boolean;
};

export const StaffPicker: React.VFC<StaffPickerProps> = (props) => {
  const [staffList, setStaffList] = useState<string[]>([]);

  useEffect(() => {
    getUsers().then((data) =>
      setStaffList(data.map((staff) => staff.initials))
    );
  }, []);

  return (
    <>
      <Form.Control
        type="select"
        list="staff-list"
        size="sm"
        value={props.value}
        name={props.name || 'completedBy'}
        onChange={props.onChange}
        disabled={props.disabled}
        isInvalid={props.isInvalid}
      />
      <datalist id="staff-list">
        {staffList.map((initials) => (
          <option key={initials} value={initials} />
        ))}
      </datalist>
    </>
  );
};
