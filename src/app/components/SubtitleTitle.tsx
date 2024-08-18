import { Typography } from "@mui/material";
import Link from "next/link";

type SubtitleTitleProps = {
  href: string;
  text: string;
  sx?: object;
};

const SubtitleTitle: React.FC<SubtitleTitleProps> = ({ href, text, sx }) => {
  return (
    <Typography component={Link} href={href} variant="overline" sx={{ display: 'block', width: '100%', color: 'primary.light', lineHeight: '1.5rem', ...sx }}>
      {text}
    </Typography>
  );
};

export default SubtitleTitle;