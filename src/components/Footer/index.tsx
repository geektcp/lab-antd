import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '泓息科技出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'OKFAR',
          title: 'OKFAR',
          href: 'http://okfar.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/okhoxi',
          blankTarget: true,
        },
        {
          key: 'okhoxi',
          title: 'okhoxi',
          href: 'http://okhoxi.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
