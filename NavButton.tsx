import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import * as H from "history";
import { pickBy } from "lodash";
import * as React from "react";
import { Link, Route, RouteComponentProps, withRouter } from "react-router-dom";

export interface INavButtonProps extends ButtonProps, RouteComponentProps<any> {
  to: H.LocationDescriptor;
  replace?: boolean;
}

interface INavButtonState {
  link?: Link;
}

class NavButton extends React.Component<INavButtonProps> {
  private link: any;

  public constructor(props: INavButtonProps) {
    super(props);
    this.onClickProxy.bind(this);
    this.link = null;
  }

  public render() {
    const { to, children, replace } = this.props;
    const buttonProps = this.spiltButtonProps(this.props);
    return (
      <Button {...buttonProps} onClick={this.onClickProxy}>
        <Route>
          <Link
            style={{ textDecoration: "none" }}
            ref={ref => (this.link = ref)}
            to={to}
            replace={replace}
          >
            {children}
          </Link>
        </Route>
      </Button>
    );
  }

  private onClickProxy: React.FormEventHandler<any> = e => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    if (this.link) {
      this.link.handleClick(e);
    }
  };

  private spiltButtonProps(props: INavButtonProps): object {
    return pickBy(
      {
        ...props,
        children: undefined,
        history: undefined,
        location: undefined,
        match: undefined,
        replace: undefined,
        staticContext: undefined,
        to: undefined,
      },
      (v: any) => v !== undefined,
    );
  }
}

export default withRouter(NavButton);
