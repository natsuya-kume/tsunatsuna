import { Divider } from '@/components/layouts/divider/Divider'
import { PostBody } from '@/components/layouts/postBody/PostBody'
import styles from '@/styles/privacy.module.css'
const Privacy = () => {
  return (
    <div className={styles.text}>
      <PostBody>
        <h2 className={styles.title}>個人情報の定義</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>
          本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であり、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別することができるものをいいます。
        </p>
        <h2 className={styles.title}>個人情報の管理</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>
          当サイト経由でお客様からお預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。
        </p>
        <h2 className={styles.title}>個人情報の利用目的</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>
          当サイトでは、お客様からのお問い合わせを通じて、お客様の氏名、住所、電話番号、メールアドレス等の個人情報をご提供いただく場合があります。
          その場合は、以下に示す利用目的のために適正に利用するものと致します。
        </p>
        <ul>
          <li className={styles.subtitle}>
            お客様からのお問い合わせ等に対応するため。
          </li>
          <li className={styles.subtitle}>
            お客様からお申し込みいただいたサービス等の提供のため。
          </li>
          <li className={styles.subtitle}>
            当サイトのサービス向上・改善、新サービスを検討するための分析等を行うため。
          </li>
          <li className={styles.subtitle}>
            個人を識別できない形で統計データを作成し、当サイトおよびお客様の参考資料とするため。
          </li>
        </ul>
        <h2 className={styles.title}>個人情報の第三者提供</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>
          当サイトのお問い合わせを通じてお預かりした個人情報は、個人情報保護法その他の法令に基づき開示が認められる場合を除き、ご本人様の同意を得ずに第三者に提供することはありません。
        </p>
        <h2 className={styles.title}>アクセス解析ツールについて</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>
          当サイトは、Googleが提供するアクセス解析ツール「Google
          アナリティクス」を利用しています。Google
          アナリティクスから提供されるCookieを使用していますが、Google
          アナリティクスによって個人を特定する情報は取得していません。
        </p>
        <p>
          お客様はブラウザの設定でCookieを無効にすることで、トラフィックデータの収集を拒否することができます。なお、トラフィックデータからお客様個人を特定することはできません。詳しくは&nbsp;
          <a
            className={styles.googleanalyticsText}
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          >
            Googleアナリティクス利用規約🔗
          </a>
          &nbsp;をご確認ください。
        </p>
        <h2 className={styles.title}>本ポリシーの変更</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>
          当サイトは、法令の制定・改正等により本ポリシーを適宜見直し予告なく変更する場合があります。本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。
        </p>
        <h2 className={styles.title}>お問い合わせ</h2>
        <Divider style={{ marginTop: 0 }} />
        <p>メールアドレス: prog.natsu.72@gmail.com</p>
      </PostBody>
    </div>
  )
}

export default Privacy
