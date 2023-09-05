import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames({
        mainCls: cls.Sidebar,
        mods: { [cls.collapsed]: collapsed },
        arrCls: [className],
      })}
    >
      <button onClick={onToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </div>
  );
};
