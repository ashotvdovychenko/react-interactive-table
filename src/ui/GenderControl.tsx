import { useRadioControl } from '@shared/control/hooks';
import { ControlProps } from '@shared/control/models';

export const GenderControl = ({ onChange, value }: ControlProps<'Male' | 'Female'>) => {
    const handleInputChange = useRadioControl<'Male' | 'Female'>(value, onChange);

    return (
        <>
            <div className="d-flex gap-3">
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="male" name="gender" value="Male" onClick={ handleInputChange }/>
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="radio" id="female" name="gender" value="Female" onClick={ handleInputChange }/>
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
            </div>
        </>
    )
}
