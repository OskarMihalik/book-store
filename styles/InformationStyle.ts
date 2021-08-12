import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useInformationStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minWidth: '380px',
            maxWidth: '900px',
            margin: '30px 0 30px 0'
        },
        textContainer: {
            marginTop: '50px'
        },
        link: {
            margin: '0px 0 0px 0',
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            letterSpacing: theme.typography.h6.letterSpacing
        },
        heading: {
            margin: '0px 0 0px 0',
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: theme.typography.h6.fontWeight,
            fontSize: theme.typography.h6.fontSize,
            lineHeight: theme.typography.h6.lineHeight,
            letterSpacing: theme.typography.h6.letterSpacing
        },
    }),
);
