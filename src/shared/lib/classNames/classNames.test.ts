import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first params', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2',
    );
  });

  test('with mods', () => {
    expect(
      classNames('someClass', { hovered: true, clicked: true }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClass class1 class2 hovered clicked');
  });

  test('with mods and one mod false', () => {
    expect(
      classNames('someClass', { hovered: true, clicked: false }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClass class1 class2 hovered');
  });

  test('with mods and one mod undefined', () => {
    expect(
      classNames('someClass', { hovered: true, clicked: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClass class1 class2 hovered');
  });
});
