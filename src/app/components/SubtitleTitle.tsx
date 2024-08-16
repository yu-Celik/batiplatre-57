import { Typography } from "@mui/material";
import Link from "next/link";

type SubtitleTitleProps = {
  href: string;
  text: string;
  sx?: object;
};

const SubtitleTitle: React.FC<SubtitleTitleProps> = ({ href, text, sx }) => {
  return (
    <Typography component={Link} href={href} variant="overline" sx={{ display: 'block', width: '100%', color: 'primary.light', textDecoration: 'underline', ...sx }}>
      {text}
    </Typography>
  );
};

export default SubtitleTitle;