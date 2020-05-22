import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
        {props.isAdmin && <p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props} />
      </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p>Please enter credentials.</p>
        )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />, document.getElementById('app'));
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="This are the details" />,
  document.getElementById("app")
);
