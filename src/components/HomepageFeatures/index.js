import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AI That Serves Your Mission',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We implement AI solutions that align with your organizational values and purpose.
        Our approach focuses on augmenting human capabilities rather than replacing human judgment,
        ensuring technology serves your mission and supports human flourishing.
      </>
    ),
  },
  {
    title: 'Organizational Evolution',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Transform toward self-managing structures where people bring their full potential to work.
        We support the evolution to distributed decision-making, authentic contribution,
        and environments where personal purpose aligns with organizational mission.
      </>
    ),
  },
  {
    title: 'Human-AI Partnership',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        As AI handles routine tasks, the future belongs to organizations that excel at
        uniquely human capabilities: creativity, ethical judgment, and authentic relationships.
        We help you thrive in this transformation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
