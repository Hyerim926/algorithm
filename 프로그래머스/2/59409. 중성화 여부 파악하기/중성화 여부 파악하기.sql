-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME,
     (
  CASE SUBSTRING_INDEX(SEX_UPON_INTAKE, ' ', 1)
    WHEN 'Neutered' THEN 'O'
    WHEN 'Spayed' THEN 'O'
    ELSE 'X'
  END
 ) AS 중성화
 FROM ANIMAL_INS;