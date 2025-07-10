import styled from 'styled-components';

const AlertBox = styled.div`
    background-color: ${(props) => (props.type === 'success' ? '#d4edda' : '#f8d7da')};
    color: ${(props) => (props.type === 'success' ? '#155724' : '#721c24')};
    border: 1px solid ${(props) => (props.type === 'success' ? '#c3e6cb' : '#f5c6cb')};
    padding: 10px 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    text-align: center;
`;

function Alert({ message, type = 'success' }) {
    return <AlertBox type={type}>{message}</AlertBox>;
}

export default Alert;
