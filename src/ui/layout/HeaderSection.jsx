import { useTranslation } from 'react-i18next';

const HeaderSection = () => {
  const { t } = useTranslation();  

  return (
    <section className="header-section ">
      <div className="shape-left">
        <img src="/images/plane-shape.png" alt={t('headerSec.title')} />
      </div>
      <div className="shape-right">
        <img src="/images/plane-shape.png" alt={t('headerSec.title')} />
      </div>

      <div className="container ">
        <h1 className="header-title">{t('headerSec.title')}</h1>
        <p className="header-description">{t('headerSec.description')}</p>
      </div>
    </section>
  );
};

export default HeaderSection;
