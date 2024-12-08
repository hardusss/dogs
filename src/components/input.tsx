type LabelWithInputProps = {
  id: string; 
  labelText: string; 
  inputType: string; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
};

const LabelWithInput: React.FC<LabelWithInputProps> = ({id, labelText, inputType, onChange}) => {
    return (
      <div>
        <label htmlFor={id}>{labelText}:</label>
        <input id={id} type={inputType} onChange={onChange ? onChange : undefined} />
      </div>
    );
  }

export default LabelWithInput;