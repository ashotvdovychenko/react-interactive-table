export interface ControlProps<T> {
    onChange: (value: T) => void;
    value: T;
}